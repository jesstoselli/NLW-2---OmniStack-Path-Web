import React, { useState, FormEvent } from "react";
// import { Link } from "react-router-dom";

// Components
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

// Styles
import "./styles.css";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    const res = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(res.data);
  };

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.'>
        <form id='search-teachers' onSubmit={searchTeachers}>
          <Select
            name='subject'
            label='Matéria'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Física", label: "Física" },
              { value: "Química", label: "Química" },
              { value: "Matemática", label: "Matemática" },
              { value: "História", label: "História" },
              { value: "Geografia", label: "Geografia" },
              { value: "Português", label: "Português" },
              { value: "Inglês", label: "Inglês" },
            ]}
          />
          <Select
            name='week_day'
            label='Dia da Semana'
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-Feira" },
              { value: "2", label: "Terça-Feira" },
              { value: "3", label: "Quarta-Feira" },
              { value: "4", label: "Quinta-Feira" },
              { value: "5", label: "Sexta-Feira" },
              { value: "6", label: "Sábado" },
            ]}
          />

          <Input
            type='time'
            name='time'
            label='Horário'
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button type='submit'>Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
