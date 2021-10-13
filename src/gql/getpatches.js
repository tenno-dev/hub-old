import { gql } from '@urql/core';

export const GET_PATCHES = gql`
	query patchversion($filter: patchversion_filter) {
		patchversion(filter: $filter, sort: "majorpatch") {
			patchver
			platform
			majorpatch
			patchnotes {
				majorpatch
				hotfix
				thumb
				url
				title
				uid
				src
				release_date
				build_status
				body
			}
		}
	}
`;