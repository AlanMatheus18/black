/*
  # Create leads table for Black Friday registration

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Full name of the lead
      - `email` (text, unique) - Email address
      - `phone` (text) - Phone number
      - `created_at` (timestamptz) - Registration timestamp
  
  2. Security
    - Enable RLS on `leads` table
    - Add policy for inserting new leads (public access for registration)
    - Add policy for authenticated users to read leads data

  3. Important Notes
    - Email must be unique to prevent duplicate registrations
    - Phone field is required
    - Public can insert (register) but cannot read
    - Only authenticated users can view leads data
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register as a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);
