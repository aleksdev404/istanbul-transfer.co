import Alerts from './Alerts'
import Table from './Table'
import Timeline from './Timeline'
import Rating from './Rating'



export default () => {
    return <div className="bg-base-200 min-h-screen">
        <div className="container p-4 md:p-6 lg:p-8 mx-auto">
            <div className="card bg-base-100 max-w-150 mx-auto border border-blue-100">
                <div className="card-body">
                    <h1 className="card-title text-2xl !mt-0">Transfer instructions</h1>
                    <div className="flex flex-col gap-6">
                        <Alerts/>
                        <Timeline/>
                        <Table/>
                        <Rating/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}