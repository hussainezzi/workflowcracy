import React from 'react';
import {
  BoltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  CpuChipIcon,
  DocumentChartBarIcon,
  SunIcon,
  WebsiteIcon,
  WhatsAppIcon,
} from '../icons';

/**
 * Resolves the icon names used in the content files to real components,
 * so `content/` can stay plain data with no JSX in it.
 */
const ICONS: Record<string, React.FC<{ className?: string }>> = {
  bolt: BoltIcon,
  briefcase: BriefcaseIcon,
  chart: ChartBarIcon,
  chat: ChatBubbleLeftRightIcon,
  cog: CogIcon,
  cpu: CpuChipIcon,
  document: DocumentChartBarIcon,
  sun: SunIcon,
  website: WebsiteIcon,
  whatsapp: WhatsAppIcon,
};

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = 'h-6 w-6' }) => {
  const Resolved = ICONS[name] ?? CogIcon;
  return <Resolved className={className} />;
};

export default Icon;
