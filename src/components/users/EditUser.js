import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const EditUser = () => {
	let history = useHistory()
	const { id } = useParams()
	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
		phone: '',
		website: '',
	})
	const onInputChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const { name, username, email, phone, website } = user
	useEffect(() => {
		loadUser()
	}, [])

	const submitForm = async (e) => {
		e.preventDefault(e)
		await axios.put(`http://localhost:3004/users/${id}`, user)
		history.push('/')
	}

	const loadUser = async () => {
		const result = await axios.get(`http://localhost:3004/users/${id}`)
		setUser(result.data)
	}
	return (
		<div className='container'>
			<div className='wx-75 mx-auto shadow p-5'>
				<h2 className='text-center mb-4'>Edit {name} User</h2>
				<form onSubmit={(e) => submitForm(e)}>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter your Name'
							name='name'
							value={name}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter your Username'
							name='username'
							value={username}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter your Email address'
							name='email'
							value={email}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter your Phone number'
							name='phone'
							value={phone}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter your Website Name'
							name='website'
							value={website}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<button className='btn btn-warning btn-block'>Update User</button>
				</form>
			</div>
		</div>
	)
}

export default EditUser
