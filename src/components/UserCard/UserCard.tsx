import { UserCardProps } from "./types";

function UserCard({ user }: UserCardProps) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
            <h3>{user.jobTitle} </h3>
            <p>firstlastName: {user.firstlastName}</p>
            <p>Age: {user.age}</p>
            {/* Добавьте другие поля пользователя */}
        </div>
    );
};

export default UserCard;
