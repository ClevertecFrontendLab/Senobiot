import { RecieptSection } from '~/components/shared-components';
import PageWrapper from '~/components/shared-components/PageWrapper';
import { PADDINGS } from '~/constants/styles';
import mockRespone from '~/data/data.json';

const data = JSON.parse(JSON.stringify(mockRespone));

const RecieptPage: React.FC = () => (
    <PageWrapper pt={PADDINGS.pageRecieptTop}>
        <RecieptSection reciept={data[0]} />
    </PageWrapper>
);

export default RecieptPage;
