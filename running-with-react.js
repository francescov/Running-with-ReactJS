function formatName(userType) {

	switch (userType) {
		case "first":
			return firstUser.firstName + ' ' + firstUser.lastName;
			break;
		case "second":
			return secondUser.firstName + ' ' + secondUser.lastName;
			break;
		default:
			break;
	}
}

const firstUser = {
  firstName: 'Melanie',
  lastName: 'D',
};

const secondUser = {
	firstName: 'Sophie',
	lastName: 'M',
};

const element1 = (
  <p>Welcome back, {formatName('first')}!</p>
);

const element2 = (
	<p>Welcome back, {formatName('second')}!</p>
);

ReactDOM.render(
  element1,
  document.getElementById('root')
);

ReactDOM.render(
  element2,
  document.getElementById('root2')
);

