import React from 'react';
import { CiHeart } from 'react-icons/ci';

const FavItems = () => {
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-sm">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className='text-[#0E2954] text-2xl flex items-center gap-2 text-center justify-center'><CiHeart className='text-2xl' />Favorite Items</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>Cy Ganderton</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FavItems;