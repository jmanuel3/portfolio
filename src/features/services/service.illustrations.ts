import blockImg from '../../assets/mascots/mascot-block.webp';
import catchImg from '../../assets/mascots/mascot-catch.webp';
import runImg from '../../assets/mascots/mascot-run.webp';
import throwImg from '../../assets/mascots/mascot-throw.webp';
import type { ServiceSlug } from './service.types';

export const SERVICE_ILLUSTRATIONS: Record<ServiceSlug, string> = {
  discovery: catchImg,
  performance: runImg,
  security: blockImg,
  launch: throwImg,
};
