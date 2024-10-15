import { ArrowSquareOut, Building, GithubLogo, Users } from '@phosphor-icons/react';
import imageSeal from '../../../../assets/tenor.gif';
import { ProfileContainer } from "./styled";

export function ProfileInfo() {
  return (
    <ProfileContainer aria-label="Profile Section">
      <img src={imageSeal} alt="Profile picture of Cameron Williamson" />
      <div className="profile-content">
        <div>
          <div className='profile-content__title'>
            <h2>Cameron Williamson</h2>
            <a href="">Github <ArrowSquareOut weight='bold' /></a>
          </div>
          <p className="profile-content__description">Tristique volutpat pulvinar vel massa, pellentesque egestas.</p>
        </div>
        <ul>
          <li>
            <GithubLogo weight="fill" />
            <span>cameronwil</span>
          </li>
          <li>
            <Building weight="fill" />
            <span>Rocketseat</span>
          </li>
          <li>
            <Users weight="fill" />
            <span>32 followers</span>
          </li>
        </ul>
      </div>
    </ProfileContainer>
  );
}