import { 
  BarChart3, 
  Siren, 
  Coffee, 
  Cloud, 
  TrendingUp, 
  Bot, 
  Zap, 
  Code,
  Building2,
  Brush,
  Database,
  Hammer
} from "lucide-react";

export const courseIcons: Record<string, React.ReactNode> = {
  "data-analytics": <BarChart3 className="text-blue-500" />,
  "major-incident-manager": <Siren className="text-red-500" />,
  "data-science": <Bot className="text-slate-500" />,
  "java-full-stack": <Coffee className="text-amber-700" />,
  "aws-devops": <Cloud className="text-sky-400" />,
  "azure-devops": <Cloud className="text-blue-600" />,
  "power-bi": <TrendingUp className="text-green-500" />,
  "business-analytics": <BarChart3 className="text-blue-700" />,
  sap: <Building2 className="text-stone-500" />,
  salesforce: <Zap className="text-yellow-500" />,
  "python-developer": <Code className="text-green-600" />,
  "dot-net": <Code className="text-purple-600" />,
  "ui-ux-design": <Brush className="text-pink-500" />,
  "management-information-systems": <Database className="text-teal-600" />,
  apse: <Hammer className="text-orange-500" />,
};
