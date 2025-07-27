import { prisma } from '@repo/database';

const UserList = async () => {
    const users = await prisma.user.findMany();
    return (
        <>
            <ul>
                {users.map(user => (
                    <tr key={user.id} style={{ borderBottom: '1px solid #ccc' }}>
                        <td style={{ padding: '8px' }}>{user.id}</td>
                        <td style={{ padding: '8px' }}>{user.name}</td>
                        <td style={{ padding: '8px' }}>{user.email}</td>
                    </tr>
                ))}
            </ul>
        </>
    )
}

export default UserList;