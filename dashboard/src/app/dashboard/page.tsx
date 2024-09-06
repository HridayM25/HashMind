import React from "react";
import { getAgents } from "../actions/agent-factory";
import { Contract } from "ethers";
import { MultiAgentChat } from "@/components/professional-multi-agent-chat";

export interface Agent {
  address: string;
  prompt: string;
  name: string;
  des: string;
  creator: string;
}

// const openaiFormatTools = JSON.stringify(formattedTools);

// console.log(openaiFormatTools);

export default async function Page() {
  const agents = (await getAgents()) as Agent[];
  console.log(agents);

  if (!agents) return <div>Loading...</div>;

  return (
    <div>
      <h1>Agents</h1>
      <ul>
        <MultiAgentChat agents={agents} />
      </ul>
    </div>
  );
}
