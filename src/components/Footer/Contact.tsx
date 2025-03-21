import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled, Typography } from '@mui/material';

const StyledContact = styled('div')`
  & h3 {
    text-align: center;
    font-size: 2rem;
    margin-top: 2rem;
  }

  & .signal-icon {
    width: 20px;
    aspect-ratio: 1 / 1;
    margin-right: 4px;
  }

  & .info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & .signal-tel {
    display: flex;
    flex-direction: column;
  }
`

const Contact = () => {
  return (
    <StyledContact>
      <Typography component="h3" variant="body2">Contact</Typography>

      <div className="info">
        <WhatsAppIcon />
        <Typography component="span">+34 687 086 711</Typography>
      </div>
      <div className="info">
        <img src="signal.png" className="signal-icon" />
        <div className="signal-tel">
          <Typography component="span">+34 687 086 711</Typography>
          <Typography component="span">+49 176 4423 5500</Typography>
        </div>
      </div>
    </StyledContact>
  )
}

export default Contact;
