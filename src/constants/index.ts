import { Link, BarChart3, Coins, Zap, Globe, Shield } from "lucide-react";
import BitcionIcon from "~/components/icons/bitcion";
import EthereumIcon from "~/components/icons/ethereum";
import PologonIcon from "~/components/icons/pologon";
import SolanaIcon from "~/components/icons/solana";
import TeslaIcon from "~/components/icons/tesla";
import UsdcIcon from "~/components/icons/usdc";
import { FeatureCardProps } from "~/types/global";

export const ORBITAL_ELEMENTS = [
    {
        id: 'ethereum',
        icon: EthereumIcon,
        color: '#627EEAa1',
        backgroundColor: '#627EEA',
        initialAngle: 45,
    },
    {
        id: 'tether',
        icon: TeslaIcon,
        color: '#26A17Ba1',
        backgroundColor: '#26A17B',
        initialAngle: 110,
    },
    {
        id: 'dollar',
        icon: PologonIcon,
        color: '#3B82F6a1',
        backgroundColor: '#3B82F6',
        initialAngle: 180,
    },
    {
        id: 'bitcoin',
        icon: BitcionIcon,
        color: '#F7931Aa1',
        backgroundColor: '#F7931A',
        initialAngle: 240,
    },
    {
        id: 'polygon',
        icon: SolanaIcon,
        color: '#8247E5a1',
        backgroundColor: '#8247E5',
        initialAngle: 300,
    },
    {
        id: 'chainlink',
        icon: UsdcIcon,
        color: '#7B3FE4a1',
        backgroundColor: '#7B3FE4',
        initialAngle: 360,
    },
]

export const features: FeatureCardProps[] = [
    {
        icon: Link,
        title: "Supply & Earn",
        description:
            "Deposit your digital assets into Eden's liquidity pools and earn competitive interest rates.​",
    },
    {
        icon: BarChart3,
        title: "Borrow",
        description:
            "Access instant loans by collateralizing your assets, with flexible terms and transparent rates.​",
    },
    {
        icon: Coins,
        title: "Swap",
        description:
            "Exchange a wide range of tokens effortlessly, with real-time pricing and minimal slippage.​",
    },
    {
        icon: Zap,
        title: "Low & Fast Transactions",
        description: "Built on AssetChain's scalable infrastructure with gas fees as low as $0.00004 per transaction.",
    },
    {
        icon: Globe,
        title: "Cross-Chain Integration",
        description:
            "Leverage multi-chain protocols to route assets for maximum yield, with users staking in optimized vaults for the best returns.",
    },
    {
        icon: Shield,
        title: "AI-Enhanced Security",
        description:
            "Advanced multi-signature security measures protect funds and prevent smart contract exploits for maximum safety.",
    },
]