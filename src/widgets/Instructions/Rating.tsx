export default () => {
    return <>
        <div className="card bg-blue-50 max-w-100 w-full mx-auto">
            <div className="card-body">
                <p className="card-title justify-center">
                    Was this page helpfull?
                </p>
                <div className="rating mx-auto">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                </div>
            </div>
        </div>
    </>
}