import { UserCardProps } from "./types";

function UserCard({ user }: UserCardProps) {
    return (
        <div>
            <h3>{user.jobTitle} </h3>
            <p>firstlastName: {user.firstlastName}</p>
            <p>Age: {user.age}</p>
        </div>
    );
};

export default UserCard;
