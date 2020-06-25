import React from "react";
import BoardNotice from "components/board/notice";
import BoardStore from "stores/board";
import { inject, observer } from "mobx-react";

interface Props {
  boardStore?: BoardStore;
}

@inject("boardStore")
@observer
class BoardNoticeContainer extends React.Component<Props> {
  private BoardStore = this.props.boardStore! as BoardStore;

  // async componentDidMount() {
  //   await this.BoardStore.GetNoticeList();
  // }

  del = async (idx: number) => {
    await this.BoardStore.DeleteNotice(idx);

    if (this.BoardStore.success["DELETE_NOTICE"]) {
      await this.BoardStore.GetNoticeList();
    }
  };

  post = async (title: string, contents: string) => {
    await this.BoardStore.PostNotice(title, contents);

    if (this.BoardStore.success["POST_NOTICE"]) {
      await this.BoardStore.GetNoticeList();
    }
  };

  update = async (idx: number, title: string, contents: string) => {
    await this.BoardStore.PatchNotice(idx, title, contents);

    if (this.BoardStore.success["UPDATE_NOTICE"]) {
      await this.BoardStore.GetNoticeList();
    }
  };

  search = async (page?: number, query?: string) => {
    await this.BoardStore.GetNoticeList(page, query);
  };

  render() {
    return (
      <BoardNotice
        list={this.BoardStore.NoticeList}
        del={this.del}
        post={this.post}
        update={this.update}
        search={this.search}
        paging={this.BoardStore.Page}
      />
    );
  }
}

export default BoardNoticeContainer;
