interface Props {
    setStep: CallableFunction
}

export default (props: Props) => {

    return <div className="card-body w-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-6">
            <div>
                <a href='#' className="flex items-center gap-2 link">
                    IST → Taksim (~55 min)
                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                    </svg>
                </a>
                <h2 className="card-title text-2xl">Confirm your booking</h2>
                <p>Online payment will be available soon. For now, we confirm bookings manually.</p>
            </div>
            <div className="grid grid-cols-4 gap-3">
                <fieldset className="fieldset !px-0 col-span-4">
                    <legend className="fieldset-legend mb-1">Card number</legend>
                    <input type="text" placeholder="0000 0000 0000 0000" className="input w-full" disabled />
                </fieldset>
                <fieldset className="fieldset !px-0 col-span-2">
                    <legend className="fieldset-legend mb-1">Card holder</legend>
                    <input type="text" placeholder="0000 0000 0000 0000" className="input w-full" disabled />
                </fieldset>
                <fieldset className="fieldset !px-0">
                    <legend className="fieldset-legend mb-1">Expiry</legend>
                    <input type="text" placeholder="XX/XX" className="input w-full" disabled />
                </fieldset>
                <fieldset className="fieldset !px-0">
                    <legend className="fieldset-legend mb-1">CVC</legend>
                    <input type="text" placeholder="XXX" className="input w-full" disabled />
                </fieldset>
            </div>
            <p className="text-xs">By&nbsp;clicking the button, you agree to&nbsp;our <a href="#" className="link">Terms of&nbsp;Service</a> and confirm communication via WhatsApp.</p>
        </div>
        <div className="flex flex-col gap-2">
            <div className="card-actions justify-end mt-3">
                <button className="btn btn-ghost link" onClick={() => props.setStep(2)}>Back to passengers</button>
                <button className="btn btn-soft btn-neutral" onClick={() => props.setStep(3)}>
                    Confirm via WhatsApp
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd" />
                        <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                    </svg>
                </button>
                {/* <button className="btn btn-soft btn-success" disabled onClick={() => props.setStep(3)}>
                    Confirm
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd" />
                    <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                    </svg>
                    </button> */}
            </div>
            <p className="text-xs text-end">Pay later · Free cancellation</p>
        </div>
    </div>
}