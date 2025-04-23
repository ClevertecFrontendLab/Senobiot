import { ApplicationState } from '~/store/configure-store';

export const getFilteredReciepts = (state: ApplicationState) => state.reciepts.filtrated;
