import ProductCard from "@/components/ui/ProductCard"

const results = [
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        },
        {
            "id": 1,
            "title": "NEW ERA",
            "category": {
                "title": "qwer"
            },
            "logo": "https://bilal312.pythonanywhere.com/media/media/product_logos/911_25fc7GF.jpeg",
            "price": "3500.00"
        }
    ]

export default  function Products(){

    return(
        <div className="grid grid-cols-6 gap-[12px]">
            {results.map((item) => (
                <ProductCard 
                    key={item.id} 
                    img={item.logo}
                    title={item.title}
                    category={item.category.title}
                    price={item.price}
                    />
            ))}
        </div>
        )
}