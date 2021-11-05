import { gql } from '@urql/core';

export const GET_PATCHES = gql`
	query patchversion($filter: patchversion_filter) {
		patchversion(filter: $filter, sort: "majorpatch") {
			platform
			majorpatch
			patchnotes {
				majorpatch
				hotfix
				thumb
				url
				src
				release_date
				build_status
				translations {
					title
					body
					languages_id
				}
			}
		}
	}
`;
