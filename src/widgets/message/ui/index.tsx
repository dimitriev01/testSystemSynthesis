import style from './style.module.scss';

interface MessageProps {
  text: string;
}

const Message: React.FC<MessageProps> = ({ text }) => {
  return <div className={style.message}>{text}</div>;
};

export default Message;