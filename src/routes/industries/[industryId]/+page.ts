import { getIndustryPageContent } from '$lib/industries/industryPageContent';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const content = getIndustryPageContent(params.industryId);

  if (!content) {
    error(404, 'Industry not found');
  }

  return {
    content
  };
};
