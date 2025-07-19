import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function SocialLinks({ profile }) {
  return (
    <>
      {(profile.website ||
        profile.xTwitter ||
        profile.github ||
        profile.linkedin ||
        profile.facebook) && (
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Connect</h3>
          <div className="flex flex-wrap gap-3">
            {profile.website && (
              <a
                href={
                  profile.website.startsWith("http")
                    ? profile.website
                    : `https://${profile.website}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm transition-colors hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faGlobe} className="h-4 w-4" />
                Website
              </a>
            )}

            {profile.github && (
              <a
                href={
                  profile.github.startsWith("http")
                    ? profile.github
                    : `https://${profile.github}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm transition-colors hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
                GitHub
              </a>
            )}

            {profile.linkedin && (
              <a
                href={
                  profile.linkedin.startsWith("http")
                    ? profile.linkedin
                    : `https://${profile.linkedin}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm transition-colors hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
                LinkedIn
              </a>
            )}

            {profile.xTwitter && (
              <a
                href={
                  profile.xTwitter.startsWith("http")
                    ? profile.xTwitter
                    : `https://${profile.xTwitter}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm transition-colors hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />X
                (Twitter)
              </a>
            )}

            {profile.facebook && (
              <a
                href={
                  profile.facebook.startsWith("http")
                    ? profile.facebook
                    : `https://${profile.facebook}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm transition-colors hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
                Facebook
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SocialLinks;
