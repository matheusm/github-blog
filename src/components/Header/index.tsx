import { HeaderContainer } from './styled';
import coverImage from '../../assets/cover.png';

export function Header() {
  return (
    <HeaderContainer>
      <img src={coverImage} alt="" />
    </HeaderContainer>
  );
}