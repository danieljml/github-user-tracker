import { useEffect, memo } from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { HiLink } from 'react-icons/hi';
import { BsBuildingsFill } from 'react-icons/bs';

const Main = ({ user }) => {
  return (
    <section className="user__content">
      <div className="content__left">
        <span className="container__image">
          <img src={user?.avatar_url ?? 'https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e'} alt="image-github" />
        </span>
      </div>
      <div className="content__right">
        <div>
          <div className="content__title">
            <p className="user__title">{user?.name ?? 'The Octocat'}</p>{' '}
            <p className="user__creationDate">Joined {new Date(user?.created_at).toLocaleDateString() ?? '25 jan 2011'}</p>
          </div>
          <p className="user__arroba">{user?.login ?? '@octocat'}</p>
          <p className="user__bio">{user?.bio ?? 'This profile has no bio'}</p>
        </div>
        <div className="user__stadistics">
          <div>
            <p>Repos</p>
            <span>{user?.public_repos ?? '8'}</span>
          </div>
          <div>
            <p>Followers</p>
            <span>{user?.followers ?? '3947'}</span>
          </div>
          <div>
            <p>Following</p>
            <span>{user?.following ?? '9'}</span>
          </div>
        </div>

        <div className="user__details">
          <div className="details__left">
            <div>
              <MdLocationOn className="details__icon" />
              <span>{user?.location ?? 'San Francisco'}</span>
            </div>
            <div>
              <AiOutlineTwitter className="details__icon" />
              <a href={user?.twitter_username ?? 'Not available'} target="_blank">
                {user?.twitter_username ?? 'Not available'}
              </a>
            </div>
          </div>

          <div className="details__right">
            <div>
              <HiLink className="details__icon" />
              <a href={user?.blog ?? 'https://github.blog'} target="_blank">
                {user?.blog ?? 'https://github.blog'}
              </a>
            </div>
            <div>
              <BsBuildingsFill className="details__icon" />
              <a href={user?.html_url ?? '@github'} target="_blank">
                {user?.html_url ?? '@github'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Main);
