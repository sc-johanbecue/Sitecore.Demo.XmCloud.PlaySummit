export type FacetValueClickedActionPayload = {
  facetId: string;
  facetValueId: string;
  facetIndex: number;
  facetValueIndex: number;
  checked: boolean;
  type: 'text' | 'range' | 'valueId';
};
