export default () => {
    return <div className="flex flex-col gap-2">
        <div role="alert" className="alert alert-success alert-vertical sm:alert-horizontal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Congratulations. Your transfer has been confirmed!</span>
            <button className="btn btn-sm btn-neutral">Got it</button>
        </div>
        <div role="alert" className="alert alert-warning">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
                <p className="font-bold">Please review the instructions below carefully.</p>
                <p>They contain important information about the meeting point, pickup process, and payment.</p>
            </div>
        </div>
    </div>
}