import React from 'react';
import { CiHeart } from 'react-icons/ci';

const ActiveAuc = () => {
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-sm">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td><CiHeart className='text-xl' /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ActiveAuc;