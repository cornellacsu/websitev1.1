import TeamCard from "@/components/Team/TeamCard";
import { team } from "../utils";

export default function Home() {

    const getTeamName = (subteam: TeamMember[]) => {
    switch (name) {
      case "gold":
        return {
          color: "text-yellow-500",
          medalColor: "text-yellow-500",
        };
      case "silver":
        return {
          color: "text-gray-400",
          medalColor: "text-gray-400",
        };
      case "bronze":
        return {
          color: "text-orange-600",
          medalColor: "text-orange-600",
        };
      default:
        return {
          color: "text-gray-500",
          medalColor: "text-gray-500",
        };
    }
  };

return (
    
    <div>
        {team.map((subteam) => (
            <div>
            <h1>getTeamName(subteam)</h1>
            <TeamCard 
            key={teammate.name+teammate.team}
            name={teammate.name} 
            link={teammate.email} 
            img={"public/acsu-logo.png"} 
            pos={teammate.position} 
            major={teammate.major} 
            year={teammate.year}/>
            </div>
            ))
            }
            
    </div>
    
);



}