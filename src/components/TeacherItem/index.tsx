import React from "react";

// Components
import api from "../../services/api";

// Icons
import wppIcon from "../../assets/images/icons/whatsapp.svg";

// Styles
import "./styles.css";

// interface TeacherItemProps {
//   imgSrc: string;
//   name: string;
//   subject: string;
//   description: string;
//   price: number;
// }

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConnection = () => {
    window.open(`https://wa.me/55${teacher.whatsapp}`, "_blank");

    api.post("connections", {
      user_id: teacher.id,
    });
  };

  return (
    <article className='teacher-item'>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora: <strong>R${teacher.cost},00</strong>
        </p>
        <button type='button' onClick={createNewConnection}>
          <img src={wppIcon} alt='WhatsApp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
