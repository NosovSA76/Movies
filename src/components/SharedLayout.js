import { Outlet } from 'react-router-dom';
import { SiThemoviedatabase } from 'react-icons/si';
import { Container, Header, Link, Logo } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Logo href="/">
            <SiThemoviedatabase size={28} />
          </Logo>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
      <footer></footer>
    </Container>
  );
};

export default SharedLayout;
