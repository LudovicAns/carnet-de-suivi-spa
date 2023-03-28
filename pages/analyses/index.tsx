import useSwr from 'swr';
import {IAnalyse} from "@/models/analyse";
import Card from "@/components/Card/Card";
import styles from "../../styles/Analyses.module.scss";
import Button from "@/components/Buttons/Button";

const fetcher = (url: string) => fetch(url).then(res => res.json());

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'Europe/Paris'
};

export default function Analyses() {
    const { data, error, isLoading } = useSwr('/api/analyses', fetcher);

    return (
        <div className={styles.container}>
            <div className={styles.analyses}>
                { isLoading && <>Chargement des données...</>}
                { error && <>{error}</> }
                { (!error && data && data.body) && data.body.map((analyse: IAnalyse) => {
                    const date = new Date(analyse.createdAt);
                    const formattedDate = date.toLocaleDateString('fr-FR', DATE_OPTIONS);

                    return (
                        <Card current={} segment={} key={analyse._id}>
                            <h1>{`Analyse du ${formattedDate}`}</h1>
                            <Button content="Voir les résultats →" />
                        </Card>
                    )
                }) }
            </div>
        </div>
    )
}