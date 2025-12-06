


const items = [{ id: 1 }, { id: 2 }, { id: 3 }]
const months = [{ id: 1 }, { id: 2 }, { id: 3 }]


export default function Calendar() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border h-screen">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            {months.map((month) => (
                <div key={month.id} className="mx-auto max-w-3xl border mt-6">
                    <ul role="list" className="space-y-3">
                        {items.map((item) => (
                            <li key={item.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow-sm">
                                {/* Your content */}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
