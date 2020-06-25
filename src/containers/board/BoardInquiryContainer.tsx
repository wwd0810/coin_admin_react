import React from "react";
import BoardInquiry from "../../components/board/inquiry/BoardInquiry";
import BoardStore from "stores/board";
import { inject, observer } from "mobx-react";

interface Props {
  boardStore?: BoardStore;
}

@inject("boardStore")
@observer
class BoardInquiryContainer extends React.Component<Props> {
  private BoardStore = this.props.boardStore! as BoardStore;

  // async componentDidMount() {
  //   await this.BoardStore.GetInquiryList();
  // }

  delete = async (idx: number) => {
    await this.BoardStore.DeleteInquiry(idx);

    if (this.BoardStore.success["DELETE_INQUIRY"]) {
      await this.BoardStore.GetInquiryList();
    }
  };

  update = async (idx: number, answer: string) => {
    await this.BoardStore.PatchInquiry(idx, answer);

    if (this.BoardStore.success["PATCH_INQUIRY"]) {
      await this.BoardStore.GetInquiryList();
    }
  };

  search = async (page?: number, query?: string, status?: string) => {
    await this.BoardStore.GetInquiryList(page, query, status);
  };

  render() {
    return (
      <BoardInquiry
        list={this.BoardStore.InquiryList}
        del={this.delete}
        update={this.update}
        search={this.search}
        paging={this.BoardStore.Page}
      />
    );
  }
}

export default BoardInquiryContainer;
