import TeamCard from "@/components/Team/TeamCard";
import { team } from "../utils";
import "./Team.css";

export default function Home() {

//     const getPosition = (position: string, team: string) => {
//     switch (position) {
//       case "president":
//         return "President"
//       case "vice-president":
//         return "Vice President";
//       case "treasurer":
//         return "Treasurer";
//       case "secretary":
//         return "secretary";
//       case "lead":
//         return "Lead";
//       default:
//         return "Officer";
//     }
//   };

return (
    
    <div className="team-content relative mx-auto flex max-w-7xl flex-col gap-7 px-4 py-20 sm:px-6 lg:px-8">
        {team.map((teammate) => (
            <TeamCard 
            key={teammate.name+teammate.team}
            name={teammate.name} 
            mail={teammate.email} 
            img={"public/acsu-logo.png"} 
            pos={teammate.position} 
            major={teammate.major} 
            year={teammate.year}
            team={teammate.team}/>
            ))
            }
            
    </div>
    
);



}