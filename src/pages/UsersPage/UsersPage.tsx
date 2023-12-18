import { useSelector } from 'react-redux';
import { selectAllUsers } from 'store/redux/users/selectors';
import { UsersPageCard, UsersPageContainer, UsersPageFlex, UsersPageH2, UsersPageP } from "./styles"

function UsersPage() {
  const users = useSelector(selectAllUsers);

  return (
    <UsersPageContainer>
      <UsersPageH2>Users Page</UsersPageH2>
      <UsersPageFlex>
        {users.map((user, index) => (
          <UsersPageCard key={index}>
            <UsersPageP>
              <span>JobTitle:</span> {user.jobTitle}
            </UsersPageP>
            <UsersPageP>
              <span>FirstlastName:</span> {user.firstlastName}
            </UsersPageP>
            <UsersPageP>
              <span>Age:</span> {user.age}
            </UsersPageP>

            {/* Добавьте другие поля пользователя, если есть */}
          </UsersPageCard>
        ))}
      </UsersPageFlex>
    </UsersPageContainer>
  );
};

export default UsersPage;

