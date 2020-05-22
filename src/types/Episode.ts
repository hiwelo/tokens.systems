type EpisodeStatus = 'announced' | 'draft' | 'published';

export interface EpisodeData {
  /** Release date for this episode */
  date: Date;
  /** Slug used for the URL of this episode */
  slug: string;
  /** Visibility status for this episode */
  status: EpisodeStatus;
  /** Title of this episode */
  title: string;
}
