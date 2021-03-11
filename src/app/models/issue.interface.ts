export interface Issue {
    active_lock_reason;
    assignee;
    assignees: [];
    author_association:string;
    body?:string;
    closed_at?;
    comments: 0;
    comments_url:string;
    created_at: string;
    events_url: string;
    html_url: string;
    id: number
    labels: []
    labels_url:string; 
    locked;
    milestone;
    node_id:string;
    number: number;
    performed_via_github_app:any
    pull_request?;
    repository_url:string;
    state:string;
    title: string;
    updated_at: string;
    url:string;
    user?: {}
}
