import { FileCommitModel } from './file-commit.model';

export class FileModel {
  id: string;
  path: string;
  commits: FileCommitModel[] = [];
}
