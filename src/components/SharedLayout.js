import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Logo } from './SharedLayout.styled';
import { SiThemoviedatabase } from 'react-icons/si';

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
