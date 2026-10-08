import { useUser } from './UserContext.jsx'

const Profile = () => {
  const { user, loading } = useUser()

  if (loading) return <p>Loading profile...</p>
  if (!user) return <p>Please register or sign in to view your profile.</p>

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile
