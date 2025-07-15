/*
  supabase table user
  - id
  - created_at
  - name
  - email
  - bio
  - tag_line
  - title
  - hero_image
  - auth_id
*/

export type RequestUser = {
  name: string;
  email: string;
  auth_id: string;
};
