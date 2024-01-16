import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
} from "next-share";

interface ShareButtonsProps {
  urlFacebook: string;
  urlReddit: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({
  urlFacebook,
  urlReddit,
}) => {
  return (
    <div className="space-x-4 ">
      <FacebookShareButton
        url={urlFacebook} > 
        <FacebookIcon size={32} round /> 
      </FacebookShareButton>
      <RedditShareButton
        url={urlReddit} > 
        <RedditIcon size={32} round /> 
      </RedditShareButton>
    </div>
  );
}
 
export default ShareButtons;