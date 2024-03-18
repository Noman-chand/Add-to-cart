import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateApi } from './SliceApi';
import { useNavigate } from 'react-router-dom';

function Edit() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [editData, setEditData] = useState(null);
    const { user, isLoading } = useSelector((state) => state.userDetail);

    useEffect(() => {
        if (id && user) {
            const singleUserData = user.find((element) => element.id === id); // Use find instead of filter to get a single user
            if (singleUserData) {
                setEditData(singleUserData);
            }
        }
    }, [id, user]);

    const newChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateApi(editData)); // Dispatch UpdateApi with editData
        navigate("/read");
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!editData) {
        return <div>User not found</div>; // Show message if user is not found
    }

    return (
        <>
            <h5>Edit API</h5>

            <div className="container">
                <h1>Please Update....</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' placeholder="Enter your name" required
                            value={editData.name || ''} onChange={newChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' placeholder="Enter your email"
                            required value={editData.email || ''} onChange={newChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="text" className="form-control" name='age' placeholder="Enter your age"
                            required value={editData.age || ''} onChange={newChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label d-block">Gender</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name='gender' value="male"
                                required checked={editData.gender === 'male'} onChange={newChange} />
                            <label className="form-check-label" htmlFor="male">Male</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name='gender' value="female" required
                                checked={editData.gender === 'female'} onChange={newChange} />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                    </div>

               <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Edit;

