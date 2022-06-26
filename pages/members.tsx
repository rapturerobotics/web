import { NextPage } from "next";
import Head from "next/head";
import Container from "../components/Container";
import Title from "../components/Title";
import MemberCard from "../components/MemberCard";

const MembersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rapture Team Members</title>
      </Head>

      <Container contentPadding>
        <Title>Team Members</Title>

        <div className="prose prose-invert max-w-full text-lg">
          <p>
            Our team consists of 7 team members. We are interested in
            technology, robotics, design and programming.
          </p>

          <MemberCard title="Mine Yardı - Mentor, Electrical & Electronics">
            I’m Mine Yardı. I am a 4th year electrical and electronics
            engineering student at Trakya University. Since September 2021, I
            have been teaching at the Edirne Youth Center Experiment Training
            Workshop within the scope of the Experiment Turkey Project. We
            participated in the Teknofest 2021 unmanned underwater systems
            category with the Rapture ROV and ASV team that I mentored. This
            year, we will continue our experience in the Teknofest 2022 unmanned
            underwater systems category and the RoboBoat 2022 surface prototype
            vehicle competition. Gök-Tek team, another team I mentored, was
            qualified to be a finalist in the Fighting UAV category with great
            success. I did my first internship at Gen Automobile company on
            electric vehicles. I specialized in embedded software, Can-Bus
            communication protocol, PCB design.
          </MemberCard>

          <MemberCard title="Mustafa Semi Bozkaya – Captain, Mechanic & Design">
            I’m Mustafa Semi Bozkaya, an 11th grade student at Edirne Süleyman
            Demirel Science High School. I’ve been interested in robotics since
            I was in the 9th grade. My first activities in this field were with
            an FRC team that we formed with our friends in experimentap. The
            17th UORG competition we went to together started with the category
            of garbage collector, and after that, my robotic adventure, which
            continued with various Experimental festivals, grew with the
            Teknofest team Rapture, which I joined in 2021, and took its current
            form. I worked in Rapture team for 1 year as a software manager and
            mechanical team member. After the competition, in which we were a
            finalist in the Basic Category of Teknofest Unmanned Underwater
            Systems Competition, I took the task of team captain and I have been
            actively continuing for about 1 year. With the trainings I received
            myself; I tried to develop experiment trainings, Teknofest
            trainings, Robonation trainings, Princeton university 2020 Summer
            School, etc. I have developed myself in C++, MicroPython and Python
            languages. In my main field, Mechanics, I have the ability to design
            and simulate in Solidworks software and use Autodesk inventor
            software. I am excited to represent my country and ministry by
            competing in the Roboboat competition held in the United States with
            the Edirne Youth Center Rapture Team, which I captained in 2022.
          </MemberCard>

          <MemberCard title="Efe Doruk Kokoz – Mechanic & Design">
            I’m Efe Doruk Kokoz, an 11th grade student at Edirne Bahçeşehir
            Science and Technology High School. Thanks to my interest in
            machines and design from an early age, I participated in many
            robotics competitions during my high school years. Thanks to Edirne
            Experimental Tenology Workshops, I had the opportunity to work in
            the field of robotics that I was interested in. I received advanced
            robotics, coding, internet of things, energy systems, material
            sciences and artificial intelligence trainings at Edirne
            Experimental Workshops. I am able to design robotics in Lego Digital
            Designer, Tinkercad Fusion 360 and Solidwork programs that I have
            studied. I was trained in Python, C, C++, Micropython programming
            languages. I was a member of the team in charge of robotics and
            software in the 2020 FLL Istanbul local tournament, and we won the
            award with the program. I was in the 17th METU Robot days as a
            member responsible for the construction of the robot in the category
            of garbage collector. I participated in the 18th Metu Robot Days in
            the category of garbage collector with my autonomous robot, which I
            designed and designed myself.
          </MemberCard>

          <MemberCard title="Bayram Kazık – Software & Algorithm">
            I am Bayram Kazık, an 11th grade student at Edirne Süleyman Demirel
            Science High School. I have been interested in software and
            algorithms for a long time and I strive to improve myself day by
            day. Over the years, I have been interested in many fields such as
            Web Programming, Database Management, Artificial Intelligence,
            Machine Learning, Artificial Neural Networks, Computer Vision, Image
            Processing, Game Development, Mobile Application Development, Data
            Structures and Algorithms, Linux and developed open source projects
            in these fields. I am familiar with many programming languages,
            mainly Python, JavaScript, C, C++, C#, Java, Dart, Lua and Go. I
            also have experience with many technologies such as TensorFlow,
            Keras, Matplotlib, PyGame, OpenCV, Tkinter, Django, HTML, CSS,
            Bootstrap, MySQL, PostgreSQL, MongoDB, Firebase, React.js, Next.js,
            Git Version Control System, Flutter, SFML, Arduino. I participated
            in the 18th International METU Robot Days in the maze solver
            category. I joined the Rapture Robotics team in 2022. I’m in charge
            of the software and algorithms part in the team and I’m excited to
            go to the USA in June 2022 for the “RoboBoat 15th Autonomous Surface
            Vehicle Competition” with this team.
          </MemberCard>

          <MemberCard title="Sevgi Sena Tursun – Public Relations">
            I am Sevgi Sena Tursun. I am an 11th grade student at Edirne
            Süleyman Demirel Science High School. Ever since I was little, I
            love to tinker with things and to come up with something
            mechanically. Because of this interest, I attended the Experiment
            Technology Workshops and set out to improve myself in different
            fields. While I was studying at Experiment Workshop, I realized that
            I was also interested in software. I added new information by
            working extra on the information I learned in the lessons in this
            field, and thanks to this, I improved myself in C and C++ languages.
            I am honored to be a member of the Rapture team that qualified as a
            finalist in 2021 Teknofest competitions. I take part in the public
            relations and software part of the team. I also participated in the
            2022 International METU Robot Days. This year, as the Rapture team,
            we will participate in the RoboBoat Unmanned Surface Vehicles
            competition, which will be held in the USA. I am extremely excited
            to go abroad and represent my country there.
          </MemberCard>

          <MemberCard title="Hazal Karakuş – Public Relations">
            I am Hazal Karakuş, a 10th grade student at Edirne Social Sciences
            High School. Since I started to be interested in robotics, I have
            had the chance to take part in the public relations and technical
            departments of different teams. I love to deal with software and
            thanks to the trainings I have received, I have had the opportunity
            to learn C++ and Python languages. I have been taking advanced
            robotics, coding, internet of things, energy systems, material
            sciences trainings at Edirne DENEYAP Technology Workshops for 3
            years and this year I participated in the METU Robot Days and I am
            also interested in Teknofest. I joined the Rapture Robotics team in
            2022 and I am excited to go to the USA in June with this team to the
            ‘Roboboat Surface Automotive Systems Competition’.
          </MemberCard>
        </div>
      </Container>
    </>
  );
};

export default MembersPage;
