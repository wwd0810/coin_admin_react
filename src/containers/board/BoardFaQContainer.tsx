import React from "react";
import BoardFaQ from "components/board/faq";
import BoardStore from "stores/board";
import { inject, observer } from "mobx-react";

interface Props {
  boardStore?: BoardStore;
}

@inject("boardStore")
@observer
class BoardFaQContainer extends React.Component<Props> {
  private BoardStore = this.props.boardStore! as BoardStore;

  async componentDidMount() {
    await this.BoardStore.GetFaqList();
  }

  post = async (question: string, answer: string) => {
    await this.BoardStore.PostFaq(question, answer);

    if (this.BoardStore.success["POST_FAQ"]) {
      await this.BoardStore.GetFaqList();
    }
  };

  delete = async (idx: number) => {
    await this.BoardStore.DeleteFaq(idx);

    if (this.BoardStore.success["DELETE_FAQ"]) {
      await this.BoardStore.GetFaqList();
    }
  };

  update = async (idx: number, question: string, answer: string) => {
    await this.BoardStore.PatchFaq(idx, question, answer);

    if (this.BoardStore.success["PATCH_FAQ"]) {
      await this.BoardStore.GetFaqList();
    }
  };

  search = async (query?: string) => {
    await this.BoardStore.GetFaqList(query);
  };

  render() {
    return (
      <BoardFaQ
        list={this.BoardStore.FaqList}
        del={this.delete}
        post={this.post}
        update={this.update}
        search={this.search}
      />
    );
  }
}

export default BoardFaQContainer;
