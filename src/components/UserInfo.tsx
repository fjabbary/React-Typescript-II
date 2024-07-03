interface UserInfoProps {
  name: string;
  age: number | string;
  email: string;
}

const UserInfo = ({ name, age, email }: UserInfoProps) => {
  return (
    <div>
      <h1>User info</h1>
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
