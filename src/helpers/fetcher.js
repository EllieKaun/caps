


let isRefreshing = false;
let failedQueue = [];

const procceedQueue = (error, token = null) => {
    failedQueue.forEach((item) => {
        if(error){
            item.reject(error)
        }else{
            item.resolve(token)
        }
    })
    failedQueue = []
}

export const fetcher = async (url, options = {}) => {
    let token = localStorage.getItem('access')

    if(token){
        options.headers = {
            ...options.headers, 
            'Authorization': `Bearer ${token}`
        }
    }

    try{
        const response = await fetch(url, options)

        if(response.status === 401 && !options._retry){
            if(isRefreshing){
                return new Promise((resolve, reject) => {
                    failedQueue.push({resolve, reject})
                }).then((token) => {
                    options.headers['Authorization'] = `Bearer ${token}`
                }).catch(error => Promise.reject(error))
            }
        }

        options._retry = true
        isRefreshing = true

        try{
            const refresh = localStorage.getItem('refresh')
            const refreshingResponse = await fetch('refresh-url', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({token: refresh})
            })
            const data = await refreshingResponse.json()

            if(refreshingResponse.ok){
                token = data.access
                localStorage.setItem('access', data.access)
                options.headers['Authorization'] = `Bearer ${token}`
                procceedQueue(null, options)
            }else{
                console.error('failed')
            }
        }catch(error){
            procceedQueue(error, null)
            return Promise.reject(error)
        }

        return await response.json()
    }catch(error){
        return Promise.error(error)
    }
}