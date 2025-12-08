// import { redirect } from 'next/navigation';
// import { getUser } from '@/utils/auth';

// export default async function CreateRacePage() {
//     const user = await getUser();

//     if (!user) {
//         redirect('/login');
//     }
//     return (
//         <div>
//             <div>Create Race</div>
//         </div>
//     )
// }

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { createrace } from './actions'


export default function CreateRace() {
    return (
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <form>
                    <div className="space-y-12 sm:space-y-16">
                        <div>
                            <h2 className="text-base/7 font-semibold text-gray-900">Create a New Race!</h2>
                            <p className="mt-1 max-w-2xl text-sm/6 text-gray-600">
                                This information will be displayed publicly so be careful what you share.
                            </p>

                            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:border-t-gray-900/10 sm:pb-0">
                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="racename" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                                        Race Name
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 sm:max-w-md">
                                            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                                            <input
                                                id="racename"
                                                name="racename"
                                                type="text"
                                                placeholder="Tom's Fun Race e.g."
                                                className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                                        About
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-2xl sm:text-sm/6"
                                            defaultValue={''}
                                        />
                                        <p className="mt-3 text-sm/6 text-gray-600">Add any details about the race, directions etc. </p>
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6">
                                    <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                                        Photo
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <div className="flex items-center gap-x-3">
                                            <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                                            <button
                                                type="button"
                                                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
                                            >
                                                Change
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-base/7 font-semibold text-gray-900">Race Information</h2>
                            <p className="mt-1 max-w-2xl text-sm/6 text-gray-600">Use a location that everyone can find!</p>

                            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:border-t-gray-900/10 sm:pb-0">
                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="organizer" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                                        Race Organizer
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="race-organizer"
                                            name="race-organizer"
                                            type="text"
                                            // autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xs sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="boat-class" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                                        Boat Class
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="boat-class"
                                            name="boat-class"
                                            type="text"
                                            placeholder="Laser, Hobie 16, All Boats Welcome e.g."
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xs sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="race-location" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                                        Body of Water
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="race-location"
                                            name="race-location"
                                            type="text"
                                            placeholder="Elk Lake @ Point Campground e.g."
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xl sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="race-date" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                                        Date
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="race-date"
                                            name="race-date"
                                            type="date"
                                            // placeholder="Elk Lake @ Point Campground e.g."
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xl sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="race-time" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                                        Time
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="race-time"
                                            name="race-time"
                                            type="time"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xl sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                                        Country
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <div className="grid grid-cols-1 sm:max-w-xs">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                                        Street address
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="street-address"
                                            name="street-address"
                                            type="text"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xl sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                                        City
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xs sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                                        State / Province
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="region"
                                            name="region"
                                            type="text"
                                            autoComplete="address-level1"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xs sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="postal-code"
                                            name="postal-code"
                                            type="text"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xs sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            formAction={createrace}
                            className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

