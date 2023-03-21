import useSwr from 'swr';
import {IAnalyse} from "@/models/analyse";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Analyses() {
    const { data, error, isLoading } = useSwr<IAnalyse[]>('/api/analyses', fetcher)

    return (
        <div className="analyses">
            { isLoading && <>Chargement des données...</>}
            { error && <>{error}</> }
            { data && data.map((analyse: IAnalyse, index: number) => [
                <div key={analyse._id}>
                    {`#${index} - ${analyse.equipement} - ${analyse.ph}`}
                </div>
            ]) }
        </div>
    )
}